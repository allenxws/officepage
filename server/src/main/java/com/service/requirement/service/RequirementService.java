package com.service.requirement.service;

import com.service.common.response.CommonResponse;
import com.service.requirement.request.AddRequirementRequest;
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
