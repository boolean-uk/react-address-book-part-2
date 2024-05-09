import React, { useRef, useState } from "react";
import { FormControl, Image } from "react-bootstrap";
import placeholderImg from "../../media/user-image-placeholder.png";
import styles from "./file-input.module.css";

export default function FileInput({
	initialValue,
	onChange,
	readAs = "URLObj",
}) {
	const [src, setSrc] = useState(initialValue || placeholderImg);

	const handleImageUpload = (e) => {
		console.log(readAs);
		switch (readAs) {
			case "URLObj": {
				const img = URL.createObjectURL(e.target.files[0]);
				setSrc(img);
				onChange(img);
				return;
			}
			case "base64": {
				//LINK:https://pqina.nl/blog/convert-a-file-to-a-base64-string-with-javascript/#encoding-the-file-as-a-base-string
				// Encode the file using the FileReader API
				const reader = new FileReader();
				reader.onloadend = () => {
					// Use a regex to remove data url part
					const base64String = reader.result
						.replace("data:", "")
						.replace(/^.+,/, "");
					setSrc(base64String);
					onChange(base64String);
				};
				reader.readAsDataURL(e.target.files[0]);
				return;
			}
		}
	};
	const ref = useRef(null);

	return (
		<div
			className={styles.wrapper}
			// didnt even googled what aria label should be used xD
			// points for trying?
			aria-roledescription="upload-image"
			onClick={() => ref.current.click()}>
			<Image
				src={src}
				className={styles.image}></Image>
			<FormControl
				ref={ref}
				className="visually-hidden "
				type="file"
				onChange={handleImageUpload}></FormControl>
		</div>
	);
}
