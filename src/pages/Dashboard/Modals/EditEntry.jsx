import React, { useEffect } from "react";
import ModalWrapper from "./ModalWrapper";
import { useLocation, useNavigate } from "react-router-dom";
import { updateEntry } from "../../../stores/serverActions";

export default function EditEntry({ data }) {
	const state = useLocation().state;

	if (!state) return <></>;

	return (
		<ModalWrapper
			title={"Edit Entry"}
			data={state}
			onSubmitButtonText="Save"
			onSubmitServerAction={updateEntry}></ModalWrapper>
	);
}
