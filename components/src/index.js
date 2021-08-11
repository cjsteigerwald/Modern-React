import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";
import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";

// auto reload
if (module.hot) {
	module.hot.accept();
}

const App = () => {
	return (
		<div className='ui container comments'>
			<ApprovalCard>
				<div>
					<h4>Are you sure you want to do this?</h4>
				</div>
			</ApprovalCard>

			<ApprovalCard>
				<CommentDetail
					author='Sam'
					timeAgo='Today at 4:45PM'
					comment='Nice blog post!'
					avatar={faker.image.avatar()}
				/>
			</ApprovalCard>
			<ApprovalCard>
				<CommentDetail
					author='Alex'
					timeAgo='Today at 2:00PM'
					comment='This is fun'
					avatar={faker.image.avatar()}
				/>
			</ApprovalCard>
			<ApprovalCard>
				<CommentDetail
					author='Jane'
					timeAgo='Yesterday at 4:01PM'
					comment='I like big butts'
					avatar={faker.image.avatar()}
				/>
			</ApprovalCard>
		</div>
	);
};

ReactDOM.render(<App />, document.getElementById("root"));
