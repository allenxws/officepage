package com.officepage.requirement.service;

import com.officepage.common.response.CommonResponse;
import com.officepage.common.service.MailService;
import com.officepage.common.util.ListUtils;
import com.officepage.requirement.dao.RequirementRecordMapper;
import com.officepage.requirement.domain.RequirementRecord;
import com.officepage.requirement.request.AddRequirementRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.CollectionUtils;

import java.util.List;

/**
 * Created by xuwushun on 2017/3/19.
 */
@Service
public class RequirementServiceDB {
	public static final String REQUIREMENT_MAIL_SUBJECT = "星河互联客户需求通知";
	@Autowired
	RequirementRecordMapper requirementRecordMapper;
	@Autowired
	RequirementReceiverServiceDB requirementReceiverServiceDB;
	@Autowired
	MailService mailService;

	public CommonResponse add(AddRequirementRequest addRequirementRequest) {
		RequirementRecord requirementRecord = new RequirementRecord();
		requirementRecord.setType(addRequirementRequest.getType());
		requirementRecord.setPhone(addRequirementRequest.getPhone());
		requirementRecord.setContent(addRequirementRequest.getContent());
		add(requirementRecord);
		sendRequirementMail(addRequirementRequest.getPhone(), addRequirementRequest.getContent());
		return new CommonResponse();
	}

	public void sendRequirementMail(String phone, String content) {
		List<String> receivers = requirementReceiverServiceDB.getAllEmails();
		if (CollectionUtils.isEmpty(receivers)) {
			return;
		}
		String mailContent = "客户需求如下：\r\n" + content + "\r\n请联系以下电话：\r\n" + phone;
		mailService.sentMail(REQUIREMENT_MAIL_SUBJECT, mailContent, ListUtils.listStringToArray(receivers));
	}

	public void add(RequirementRecord requirementRecord) {
		requirementRecordMapper.insert(requirementRecord);
	}
}
