// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import Link from "@mui/material/Link"
import LogInButton from "../LogInButton"
import './LandingPage.css'
import { getServerStatus } from '../../services/StorageManager.service'

const LandingPage = ({ strings }) => {

	const [serverStatus, setServerStatus] = useState('');

	useEffect(() => {
		getServerStatus()
			.then(u => {
				setServerStatus(u.message);
			})

		return function cleanup() {
			//mounted = false
		}
	});

	return (
		<div>
			<div className='landingpage'>
				<div className='access'>
					<div className='notes'>
						To have access to the storage as a service platform, you need to use your work or school account.
					</div>
					<div className='login'>
						<LogInButton strings={strings} />
					</div>
				</div>
				<div className='divider' />
				<div className='three'>
					<h5>
						What you can do here?
					</h5>
					<ol className='cando'>
						<li>Find which Azure Storage blob containers you have access to use.</li>
						<li>Manage who has access to the space you are creating.</li>
						<li>Easily connect to the storage accounts and containers.</li>
					</ol>
				</div>
			</div>
			<div>
				{serverStatus && <div><br /><i>Server Status: </i><b>{serverStatus}</b></div>}
			</div>
		</div>
	);
}

LandingPage.propTypes = {
	strings: PropTypes.shape({
		logIn: PropTypes.string
	})
}

LandingPage.defaultProps = {
	strings: {
		logIn: 'Log In'
	}
}

export default LandingPage
