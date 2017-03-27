package com.officepage.requirement.controller;

import com.officepage.common.controller.BaseController;
import com.officepage.common.response.CommonResponse;
import com.officepage.requirement.request.AddRequirementRequest;
import com.officepage.requirement.service.RequirementService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

/**
 * Created by xuwushun on 2017/3/19.
 */
@RequestMapping(value = "/requirement")
@RestController
public class RequirementController extends BaseController {
	@Autowired
	RequirementService requirementService;

	@RequestMapping(value = "/add", method = RequestMethod.PUT)
	public CommonResponse add(@RequestBody AddRequirementRequest addRequirementRequest) {
		return requirementService.add(addRequirementRequest);
	}
}
