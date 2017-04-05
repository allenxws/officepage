package com.officepage.requirement.domain;

import com.officepage.common.domain.CommonDomain;

/**
 * Created by xuwushun on 2017/4/5.
 */
public class RequirementReceiver extends CommonDomain {
	private String receiverEmail;

	public String getReceiverEmail() {
		return receiverEmail;
	}

	public void setReceiverEmail(String receiverEmail) {
		this.receiverEmail = receiverEmail;
	}
}
