'use client'
import React from "react";
import { useTranslation } from "react-i18next";

export const LocaleText: React.FC<{ children: string }> = ({ children }) => {
	const { t } = useTranslation()
	return (
		<>
			{t(children)}
		</>
	)
} 
