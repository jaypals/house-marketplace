import { useState, useEffect, useRef } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import Spinner from "../components/Spinner";

function CreateListing() {
	const [geolocationEnabled, setGeolocationEnabled] = useState(true);
	const [loading, setLoading] = useState(true);
	const [formData, setFormData] = useState({
		type: "rent",
		name: "",
		bedrooms: 1,
		parking: false,
		furnish: false,
		address: "",
		offer: false,
		regualrPrice: 0,
		discountedPrice: 0,
		images: {},
		latitude: 0,
		longtitude: 0,
	});

	const {
		type,
		name,
		bedrooms,
		parking,
		furnish,
		address,
		offer,
		regularPrice,
		discountedPrice,
		images,
		latitude,
		longtitude,
	} = formData;

	const auth = getAuth();
	const navigate = useNavigate();
	const isMounted = useRef(true);

	useEffect(() => {
		if (isMounted) {
			onAuthStateChanged(auth, (user) => {
				if (user) {
					setFormData({ ...formData, userRef: user.uid });
				} else {
					navigate("/signin");
				}
			});
		}

		return () => {
			isMounted.current = false;
		};

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [isMounted]);

	if (loading) {
		return <Spinner />;
	}

	return <div>Create</div>;
}

export default CreateListing;
