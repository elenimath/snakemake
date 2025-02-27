'use strict';



class ContentDisplay extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return e(
            "div",
            { className: "flex items-center justify-center min-h-screen z-0" },
            this.renderContent()
        )
    }

    renderContent() {
        let setView = this.props.app.setView;
        switch (this.props.app.state.content) {
            case "rulegraph":
                return e(
                    "div",
                    { className: "flex gap-3 p-3 items-start" },
                    e(RuleGraph, { setView: setView }),
                    e(
                        "div",
                        {},
                        e(
                            "div",
                            {
                                className: "prose prose-sm max-w-lg",
                                dangerouslySetInnerHTML: { __html: workflow_desc }
                            }
                        ),
                        e(
                            "div",
                            { id: "brand" }
                        )
                    )
                );
            case "stats":
                return e(
                    "div",
                    { className: "p-3" },
                    e(Stats)
                );
            case "img":
                return e(
                    "div",
                    { className: "p-3" },
                    e(
                        "img",
                        { src: this.props.app.state.contentPath }
                    )
                );
            case "html":
            case "pdf":
                return e(
                    "iframe",
                    { src: this.props.app.state.contentPath, className: "w-screen h-screen" }
                )
        }
    }
}