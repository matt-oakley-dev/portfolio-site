import React from "react";
import { useState } from "react";


import aws from '../../images/integrations/aws.svg';
import chatgpt from '../../images/integrations/chatgpt.svg';
import slack from '../../images/integrations/slack.svg';
import spotify from '../../images/integrations/spotify.svg';
import webhook from '../../images/integrations/webhook.svg';


import '../../scss/icons.scss';

export default function IntegrationRow() {
    return (
        <>
            <div className='social-media-row justify-content-left'>
                <img src={aws} className="tech-media-icon cursor-regular"  alt="aws logo"/>
				<img src={chatgpt} className="tech-media-icon cursor-regular"  alt="chatgpt logo"/>
				<img src={slack} className="tech-media-icon cursor-regular"  alt="slack logo"/>
				<img src={spotify} className="tech-media-icon cursor-regular"  alt="spotify logo"/>
				<img src={webhook} className="tech-media-icon cursor-regular"  alt="webhook logo"/>
            </div>
        </>
    );
}