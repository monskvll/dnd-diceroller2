import React from 'react';

import { bubblegum, gold, mint } from '../theme/colors';

/* Layout: contains global styling (for page background, text, link and span colors (including their selection) */

const Layout = (props) => {
    return (
        <div className="page-layout">
            {props.children}
            <style jsx global>{`
                    body {
                        background: ${gold.light};
                    }

                    a, p, span {
                        text-transform: uppercase;
                        font-weight: bold; 
                    }

                    a {
                        color: ${mint.default};
                        transition: 1000ms;
                    }

                    a:visited {
                        color: ${mint.default};
                    }

                    a:hover {
                        color: ${bubblegum.default};
                    }

                    a::selection, p::selection, span::selection {
                        background: ${mint.light};                    
                    }               
                `}
            </style>
        </div>
    )
}

export default Layout;