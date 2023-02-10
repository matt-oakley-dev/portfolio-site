import React from "react";

export default function ExperienceRow({
    techKey
}) {

    const content = {
        'php': {
            'title': 'PHP',
            'content': 'I have been working with PHP for 5 years and have developed a strong understanding of this popular scripting language. During this time, I have built a variety of applications and have gained experience in various aspects of web development, including server-side scripting, database integration, and front-end development. I have also learned how to work with popular PHP frameworks such as WordPress and Symfony. My experience has allowed me to become proficient in creating dynamic and efficient web applications that meet the needs of users. I am confident in my ability to deliver high-quality PHP solutions and am excited to continue to grow and improve my skills in this field. '
        },
        'aws': {
            'title': 'Amazon Web Services',
            'content': 'I have gained extensive experience in using Amazon Web Services (AWS) over the past few years, with a focus on RDS, EC2, S3, and Amplify. I have become proficient in setting up and managing relational databases using RDS, and have a deep understanding of how to configure and launch virtual machines using EC2. I have also gained experience in using S3 for cloud-based storage and have learned how to integrate it with other AWS services. Furthermore, I have used Amplify to build and deploy full-stack web applications, making use of its powerful capabilities for backend development, authentication, and hosting. I am confident in my ability to deliver high-quality AWS solutions and am excited to continue to grow my skills in this field.'
        },
        'js': {
            'title': 'JS',
            'content': 'I have been working with JavaScript for 5 years and have developed a strong understanding of this versatile programming language. During this time, I have built a variety of web applications and have gained experience in both front-end and back-end development. I have learned how to work with popular JavaScript libraries and frameworks such as React and Node.js. My experience has allowed me to become proficient in creating dynamic and interactive user interfaces, as well as implementing complex logic on the server-side. I am confident in my ability to deliver high-quality JavaScript solutions and am excited to continue to grow and improve my skills in this field. '
        },
        'wordpress': {
            'title': 'Wordpress',
            'content': 'With 3 years of experience in WordPress, I have honed my skills in building plugins and themes from scratch. During this time, I have worked with leading universities in the UK, delivering high-quality solutions that meet their specific needs. I am also proud to have contributed to the WordPress core, demonstrating my commitment to the platform and my expertise in its inner workings. I have become proficient in using the WordPress platform to create custom plugins that add functionality to websites, as well as custom themes that provide a unique and tailored look and feel. My experience has allowed me to develop a deep understanding of the WordPress platform and its underlying code, and I am confident in my ability to deliver high-quality solutions that meet the requirements of my clients. I am excited to continue to build my skills in WordPress and bring my expertise to new projects.'
        },
        'git': {
            'title': 'GIT',
            'content': 'I have been using Git for 5 years now and have become an expert in managing projects and collaborating with others using this powerful version control system. My experience has allowed me to develop a deep understanding of Git and its many features, making me an asset to any team. I am confident in my ability to effectively manage complex projects, resolve conflicts, and maintain the integrity of code repositories. I am excited to bring my expertise in Git to my next project and continue to grow and develop my skills. '
        },
    };

	return (
        <div>
            <h1 className='has-third-color'>My Experience in: <span className="has-secondary-color">{content[techKey].title}</span></h1>
            <p>{content[techKey].content}</p>
        </div>
  	)
}