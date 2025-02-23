package com.jobportal.controllers;

import com.jobportal.models.db.HelpTicketDetailsDto;
import com.jobportal.models.db.HelpTicketForListDto;
import com.jobportal.models.function.helpticket.HelpTicketReplyDto;
import com.jobportal.services.HelpTicketService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.jobportal.models.function.helpticket.CreateHelpTicketDto;
import com.jobportal.models.function.BasicResponseDto;
import com.jobportal.models.function.OperationResultDto;
import com.jobportal.models.function.ResponseDataDto;

@RestController()
@RequestMapping("/helpTicket")
public class HelpTicketController {

	@Autowired private HelpTicketService _helpTicketService;

	public HelpTicketController() {
		// TODO Auto-generated constructor stub
	}

	@PostMapping("/create")
	public BasicResponseDto registerUser(@RequestBody CreateHelpTicketDto createHelpTicket) {
		BasicResponseDto response = new BasicResponseDto();
		OperationResultDto result = new OperationResultDto<>();

		result = this._helpTicketService.createHelpTicket(createHelpTicket);

		if(result.get_isSuccess())
			response.setStatus("Success");
		else {
			response.setStatus("Failed");
			response.setMessage(result.get_message());
		}

		return response;
	}

	@GetMapping("/search")
	public ResponseDataDto<HelpTicketForListDto[]> searchHelpTicketList(@RequestParam("user_id") String user_id) {
		ResponseDataDto<HelpTicketForListDto[]> response = new ResponseDataDto<HelpTicketForListDto[]>();
		OperationResultDto<HelpTicketForListDto[]> result = new OperationResultDto<HelpTicketForListDto[]>();

		result = this._helpTicketService.searchHelpTicketList(user_id);

		if(result.get_isSuccess()) {
			response.setStatus("Success");
			response.setData(result.get_data());
		} else {
			response.setStatus("Failed");
			response.setMessage(result.get_message());
		}

		return response;
	}

	@GetMapping("/{hlp_tkt_id}")
	public ResponseDataDto<HelpTicketDetailsDto> getHelpTicketInfo(@PathVariable("hlp_tkt_id") String hlp_tkt_id) {
		ResponseDataDto<HelpTicketDetailsDto> response = new ResponseDataDto<HelpTicketDetailsDto>();
		OperationResultDto<HelpTicketDetailsDto> result = new OperationResultDto<HelpTicketDetailsDto>();

		result = this._helpTicketService.getHelpTicketInfo(hlp_tkt_id);

		if(result.get_isSuccess()) {
			response.setStatus("Success");
			response.setData(result.get_data());
		} else {
			response.setStatus("Failed");
			response.setMessage(result.get_message());
		}

		return response;
	}

	@PutMapping("/{hlp_tkt_id}/reply")
	public BasicResponseDto replyToHelpTicket(@PathVariable("hlp_tkt_id") String hlp_tkt_id, @RequestBody HelpTicketReplyDto helpTicketReply) {
		BasicResponseDto response = new BasicResponseDto();
		OperationResultDto<HelpTicketDetailsDto> result = new OperationResultDto<HelpTicketDetailsDto>();

		result = this._helpTicketService.replyToHelpTicket(hlp_tkt_id,helpTicketReply);

		if(result.get_isSuccess())
			response.setStatus("Success");
		else {
			response.setStatus("Failed");
			response.setMessage(result.get_message());
		}

		return response;
	}

}
