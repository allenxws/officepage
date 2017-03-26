package com.officepage.requirement.domain;

import com.officepage.common.domain.CommonDomain;

/**
 * Created by xuwushun on 2017/3/20.
 */
public class RequirementRecord extends CommonDomain {
	private Byte type;
	private String phone;
	private String content;

	public Byte getType() {
		return type;
	}

	public void setType(Byte type) {
		this.type = type;
	}

	public String getPhone() {
		return phone;
	}

	public void setPhone(String phone) {
		this.phone = phone;
	}

	public String getContent() {
		return content;
	}

	public void setContent(String content) {
		this.content = content;
	}
}
