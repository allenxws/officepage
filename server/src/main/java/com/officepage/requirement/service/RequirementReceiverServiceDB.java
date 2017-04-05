package com.officepage.requirement.service;

import com.officepage.requirement.dao.RequirementReceiverMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Created by xuwushun on 2017/4/5.
 */
@Service
public class RequirementReceiverServiceDB {
	@Autowired
	RequirementReceiverMapper requirementReceiverMapper;

	public List<String> getAllEmails() {
		return requirementReceiverMapper.getAllMails();
	}
}
