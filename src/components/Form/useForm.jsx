import { useReducer } from "react";

const formDataReducer = (state, action) => {
	const formData = { ...state };
	const { name, value, isValid } = action.payload;

	switch (action.action) {
		case "CREATE": {
			formData[name] = { value, isValid, wasTouched: false };
			return formData;
		}
		case "MUTATE": {
			formData[name] = { value, isValid, wasTouched: true };
			return formData;
		}
		case "DELETE": {
			delete formData[name];
			return formData;
		}
		case "TOUCH_ALL": {
			for (const key in formData) {
				formData[key] = { ...formData[key], wasTouched: true };
			}
			return formData;
		}
		default:
			return state;
	}
};
const createFormInputAction = (name, value, isValid) => ({
	action: "CREATE",
	payload: { name, value, isValid },
});
const mutateFormInputAction = (name, value = "", isValid = false) => ({
	action: "MUTATE",
	payload: { name, value, isValid },
});
const deleteFormInputAction = (name) => ({
	action: "DELETE",
	payload: { name },
});
const touchAllFormAction = () => ({ action: "TOUCH_ALL", payload: {} });

const useForm = (inputFields) => {
	const [data, dispatchFormUpdate] = useReducer(formDataReducer, {}, () => {
		const obj = {};
		for (const field in inputFields) {
			if (Array.isArray(inputFields)) {
				obj[inputFields[field]] = { value: "", isValid: false };
			} else {
				obj[field] = { value: inputFields[field], isValid: true };
			}
		}
		return obj;
	});
	function mutateEntry(name, value, isValid = true) {
		const validation =
			typeof isValid === "function" ? isValid(value) : isValid;
		dispatchFormUpdate(mutateFormInputAction(name, value, validation));
	}
	function deleteEntry(name) {
		dispatchFormUpdate(deleteFormInputAction(name));
	}
	function entries() {
		const values = {};
		for (const key in data) {
			values[key] = data[key].value;
		}
		return values;
	}
	function get(name) {
		return data[name];
	}

	function isInvalid(name) {
		return get(name)?.wasTouched && !get(name).isValid;
	}

	function canSubmit(exceptions = []) {
		for (const key in data) {
			if (exceptions.includes(key)) continue;
			if (!data[key].isValid) return false;
		}
		return true;
	}

	function touchAll() {
		dispatchFormUpdate(touchAllFormAction());
	}

	return {
		mutateEntry,
		deleteEntry,
		entries,
		get,
		isInvalid,
		canSubmit,
		touchAll,
	};
};
export default useForm;
