package com.officepage.requirement.service;

import com.officepage.common.response.CommonResponse;
import com.officepage.requirement.request.AddRequirementRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * Created by xuwushun on 2017/3/19.
 */
@Service
public class RequirementService {
	@Autowired
	RequirementServiceDB requirementServiceDB;

	public CommonResponse add(AddRequirementRequest addRequirementRequest) {
		return requirementServiceDB.add(addRequirementRequest);
	}
}
