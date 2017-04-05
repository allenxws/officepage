package com.officepage.requirement.dao;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

import java.util.List;

/**
 * Created by xuwushun on 2017/4/5.
 */
@Mapper
public interface RequirementReceiverMapper {
	@Select({
			"select receiver_email from requirement_receiver where is_deleted = 0"
	})
	List<String> getAllMails();
}
