package com.officepage.requirement.service;

import com.officepage.common.response.CommonResponse;
import com.officepage.requirement.dao.RequirementRecordMapper;
import com.officepage.requirement.domain.RequirementRecord;
import com.officepage.requirement.request.AddRequirementRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * Created by xuwushun on 2017/3/19.
 */
@Service
public class RequirementServiceDB {
	@Autowired
	RequirementRecordMapper requirementRecordMapper;

	public CommonResponse add(AddRequirementRequest addRequirementRequest) {
		RequirementRecord requirementRecord = new RequirementRecord();
		requirementRecord.setType(addRequirementRequest.getType());
		requirementRecord.setPhone(addRequirementRequest.getPhone());
		requirementRecord.setContent(addRequirementRequest.getContent());
		add(requirementRecord);
		return new CommonResponse();
	}

	public void add(RequirementRecord requirementRecord) {
		requirementRecordMapper.insert(requirementRecord);
	}
}
