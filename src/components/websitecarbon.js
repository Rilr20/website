import React, { useEffect } from 'react';

const WebsiteCarbon = () => {
    useEffect(() => {
        // This code will run after the component mounts
        const script = document.createElement('script');
        script.src = 'https://unpkg.com/website-carbon-badges@1.1.3/b.min.js';
        script.defer = true;

        // Append the script to the document's body
        document.body.appendChild(script);

        return () => {
            // This code will run when the component unmounts
            // Remove the script element to clean up
            document.body.removeChild(script);
        };
    }, []);

    return (
        <div>
            <div id="wcb" className="carbonbadge wcb-d"></div>
        </div>
    );
};

export default WebsiteCarbon;
