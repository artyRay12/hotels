import React from "react";

export default function SizeButtons({ onSizeChange }) {
    return (
        <div className="m-left">
            <div
                className="btn-group btn-group"
                role="group"
                aria-label="Basic example"
            >
                <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={() => onSizeChange(8)}
                >
                    8
                </button>
                <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={() => onSizeChange(16)}
                >
                    16
                </button>
                <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={() => onSizeChange(24)}
                >
                    24
                </button>
            </div>
        </div>
    );
}
