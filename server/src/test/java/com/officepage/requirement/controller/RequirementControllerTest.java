package com.officepage.requirement.controller;

import com.officepage.TestAppConfig;
import com.officepage.common.service.JsonService;
import com.officepage.requirement.request.AddRequirementRequest;
import org.junit.Test;
import org.springframework.beans.factory.annotation.Autowired;

/**
 * Created by xuwushun on 2017/3/27.
 */
public class RequirementControllerTest extends TestAppConfig {
	@Autowired
	JsonService jsonService;

	@Test
	public void add() throws Exception {
		AddRequirementRequest addRequirementRequest = new AddRequirementRequest();
		addRequirementRequest.setType(Byte.valueOf("0"));
		addRequirementRequest.setPhone("18030180739");
		addRequirementRequest.setContent("test");
		this.testPut("/requirement/add", jsonService.toJson(addRequirementRequest));
	}

}