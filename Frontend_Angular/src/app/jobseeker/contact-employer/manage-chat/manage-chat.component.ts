import { AfterContentInit, Component, HostListener, OnDestroy, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { NavigationPageEnum } from "src/app/common/enums/navigation-page.enum";
import { AppSettingsDto } from "src/app/models/common-models/AppSettingsDto.model";
import { BasicResponseDto } from "src/app/models/function-model/BasicResponseDto.model";
import { ResponseDataDto } from "src/app/models/function-model/ResponseDataDto.model";
import { CreateNewChatDto } from "src/app/models/function-model/chat/CreateNewChatDto.model";
import { SearchChatHistoryDto } from "src/app/models/function-model/chat/SearchChatHistoryDto.model";
import { ChatHistoryDto } from "src/app/models/view-model/chat/ChatHistoryDto.model";
import { EmployerDetailsDto } from "src/app/models/view-model/user/EmployerDetailsDto.model";
import { EmployerDetailsViewDto } from "src/app/models/view-model/user/EmployerDetailsViewDto.model";
import { EmployerInfoDto, getEmployerInfoInstance } from "src/app/models/view-model/user/EmployerInfoDto.model";
import { ChatService } from "src/app/services/chat.service";
import { AppSettingsService } from "src/app/services/common/app-settings.service";
import { UserService } from "src/app/services/user.service";

@Component({
  selector: 'app-manage-chat',
  templateUrl: './manage-chat.component.html'
})
export class ManageChatComponent implements OnInit, AfterContentInit, OnDestroy {

  //#region Variables

  protected appSettings: AppSettingsDto;

  private _employer_user_id: string = "";
  private _searchChatHistory: SearchChatHistoryDto = {
    employer_user_id: "",
    jobseeker_user_id: ""
  };
  private interval: any = null;

  protected gridData: ChatHistoryDto[] = [];
  protected employerInfo: EmployerInfoDto = {
    ...getEmployerInfoInstance()
  };
  protected message: string = "";  
  protected totalHeight: number = 500;

  //#endregion

  //#region Page Load

  constructor(
    private _router: Router,
    private _activatedRoute: ActivatedRoute,
    private _appSettingsService: AppSettingsService,
    private _userService: UserService,
    private _chatService: ChatService,
  ) {
    this.appSettings = this._appSettingsService.getAppSettingsData();
  }

  ngOnInit(): void {
    this._activatedRoute.params.subscribe(params => {
      this._employer_user_id = params["employer_user_id"];

      this.getEmployerInfo();
      this.searchList();
      this.interval = setInterval(() => {
        this.searchList();
      },3000);
    });
  }

  ngAfterContentInit(): void {
    this.totalHeight = window.innerHeight - 200;
  }

  ngOnDestroy(): void {
    clearInterval(this.interval);
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.totalHeight = window.innerHeight - 200;
  }

  //#endregion

  //#region Private Functions

  //#endregion

  //#region Grid Functions

  private searchList(): void {
    this._searchChatHistory = {
      employer_user_id: this._employer_user_id,
      jobseeker_user_id: this.appSettings.user_id
    };

    this.getChatHistoryList();
  }

  private loadItems(items: ChatHistoryDto[]): void {
    this.gridData = items;

    this.gridData.sort((a, b) => {
      let timeA = a.message_num_date + (a.message_dec_time / Math.pow(10, 6));
      let timeB = b.message_num_date + (b.message_dec_time / Math.pow(10, 6));

      return timeA - timeB;
    })
    setTimeout(() => {
      document.getElementById("cardBody").scrollTop = document.getElementById("cardBody").scrollHeight;
    }, 200);
  }

  //#endregion

  //#region Component Functions

  protected onGoBackClick(): void {
    this._router.navigate([`jobseeker/${NavigationPageEnum.EmployerList}`]);
  }

  protected onSendMessageClick(): void {
    let createNewChat: CreateNewChatDto = {
      message: this.message,
      employer_id: this.employerInfo.EmployerDetails.employer_id,
      jobseeker_id: this.appSettings.jobseeker_id,
      user_id: this.appSettings.user_id,
    };

    this.sendChat(createNewChat);
  }

  //#endregion

  //#region Api Functions

  private getEmployerInfo(): void {
    this._userService
      .getEmployerInfo(this._employer_user_id)
      .subscribe((response: ResponseDataDto<EmployerInfoDto>) => {
        if (response?.Status?.toUpperCase() == "SUCCESS")
          this.employerInfo = response?.Data;
        else {
          this._router.navigate([`jobseeker/${NavigationPageEnum.EmployerList}`]);
          alert("Failed to get data. " + response?.Message);
        }
      });
  }

  private getChatHistoryList(): void {
    this._chatService
      .searchChatHistory(this._searchChatHistory)
      .subscribe((response: ResponseDataDto<ChatHistoryDto[]>) => {
        if (response?.Status?.toUpperCase() == "SUCCESS")
          this.loadItems(response.Data);
        else {
          this.loadItems([]);
          alert("Failed to get data. " + response?.Message)
        }
      });
  }

  private sendChat(createNewChat: CreateNewChatDto): void {
    this._chatService
      .sendChat(createNewChat)
      .subscribe((response: BasicResponseDto) => {
        if (response?.Status?.toUpperCase() == "SUCCESS") {
          this.message = "";
          this.searchList();
        } else
          alert("Failed to send chat. " + response?.Message)

      });
  }

  //#endregion

}
