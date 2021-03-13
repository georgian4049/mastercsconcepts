import React from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import { makeStyles } from "@material-ui/core/styles";
const styles = makeStyles((theme) => ({
	LoadingIndicator: {
		display: "flex",
		position: "absolute",
		top: "50%",
		left: "50%",
		transform: "translate(-50%, -50%)",
		color: "#FFF"
	}
}));

function IndicateLoading(props) {
	const classes = styles();
	if (props.isLoading) {
		return (
			<div className={classes.LoadingIndicator}>
				<CircularProgress size={props.size} />
			</div>
		);
	} else {
		return null;
	}
}
export default IndicateLoading;
