package com.jobportal.services;

import com.jobportal.models.function.helpticket.CreateHelpTicketDto;
import com.jobportal.models.db.HelpTicketDetailsDto;
import com.jobportal.models.db.HelpTicketForListDto;
import com.jobportal.models.function.OperationResultDto;
import com.jobportal.models.function.helpticket.HelpTicketReplyDto;
import com.jobportal.services.dao.HelpTicketDaoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class HelpTicketService {

	@Autowired private HelpTicketDaoService _helpTicketDaoService;

	public HelpTicketService() {
		// TODO Auto-generated constructor stub
	}

	public OperationResultDto createHelpTicket(CreateHelpTicketDto createHelpTicket) {
		OperationResultDto result = null;

		result = this._helpTicketDaoService.insertIntoHelpTicket(createHelpTicket);

		return result;
	}

	public OperationResultDto<HelpTicketForListDto[]> searchHelpTicketList(String user_id) {
		OperationResultDto<HelpTicketForListDto[]> result = null;

		result = this._helpTicketDaoService.getHelpTicketList(user_id);

		return result;
	}

	public OperationResultDto<HelpTicketDetailsDto> getHelpTicketInfo(String hlp_tkt_id) {
		OperationResultDto<HelpTicketDetailsDto> result = null;

		result = this._helpTicketDaoService.getHelpTicketInfo(hlp_tkt_id);

		return result;
	}

	public OperationResultDto replyToHelpTicket(String hlp_tkt_id, HelpTicketReplyDto helpTicketReply) {
		OperationResultDto result = null;

		result = this._helpTicketDaoService.updateHelpTicketWithReply(hlp_tkt_id,helpTicketReply);

		return result;
	}

}
