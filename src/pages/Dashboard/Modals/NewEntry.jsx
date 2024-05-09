import React from "react";
import {
	Button,
	Col,
	Container,
	Form,
	Modal,
	Row,
	Stack,
} from "react-bootstrap";
import Input from "../../../components/Form/Input";
import { useNavigate, useSubmit } from "react-router-dom";
import { ROUTE_NAMES } from "../../../routes/router";
import FileInput from "../../../components/Form/FileInput";
import useForm from "../../../components/Form/useForm";
import { addNewEntry } from "../../../apis/serverActions";
import { toast } from "react-toastify";
import ModalWrapper from "./ModalWrapper";

export default function NewEntry() {
	return (
		<ModalWrapper
			title={"New Entry"}
			onSubmitServerAction={addNewEntry}
		/>
	);
}
