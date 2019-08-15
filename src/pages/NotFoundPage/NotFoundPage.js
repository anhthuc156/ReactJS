import React from 'react';

function NotFoundPage() {
    return (
        <div className="alert alert-warning">
            <button type="button" className="close" data-dismiss="alert" aria-hidden="true">&times;</button>
            <strong>404- Page Not Found</strong>
        </div>
    );
}

export default NotFoundPage;
