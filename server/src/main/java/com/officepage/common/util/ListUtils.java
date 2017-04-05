package com.officepage.common.util;

import org.springframework.util.CollectionUtils;

import java.util.List;

/**
 * Created by xuwushun on 2017/4/5.
 */
public class ListUtils {
	public static String[] listStringToArray(List<String> stringList) {
		if (CollectionUtils.isEmpty(stringList)) {
			return null;
		}
		String[] stringArray = new String[stringList.size()];
		for (int i = 0; i < stringList.size(); i++) {
			stringArray[i] = stringList.get(i);
		}
		return stringArray;
	}
}
