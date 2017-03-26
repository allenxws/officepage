package com.service.requirement.dao;

import com.service.requirement.domain.RequirementRecord;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;

/**
 * Created by xuwushun on 2017/3/20.
 */
@Mapper
public interface RequirementRecordMapper {
	@Insert({
			"insert into requirement_record (type, phone, content)" +
					" values (#{type}, #{phone}, #{content})"
	})
	void insert(RequirementRecord requirementRecord);
}
