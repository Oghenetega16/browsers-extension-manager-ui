export default function ExtensionsList() {
    return (
        <div className="extensions">
            <div className="extension-heading">
                <h1>Extensions List</h1>
                <ul>
                    <li>All</li>
                    <li>Active</li>
                    <li>Inactive</li>
                </ul>
            </div>

            <div className="extension-card">
                <div className="card-details">
                    <img src="./src/assets/images/logo-devlens.svg" alt="devlens logo" />
                    <div>
                        <h4>DevLens</h4>
                        <p>Quickly inspect page layouts and visualize element boundaries.</p>
                    </div>
                </div>
                <div className="remove-toggle">
                    <button>Remove</button>
                    <img />
                </div>
            </div>
        </div>
    )
}