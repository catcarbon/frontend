import * as m from "mithril";
import Stats from "./stats";
import Operators from "./operators";
import Ranks from "./ranks";
import Tabs from "components/misc/Tabs";
import NotFound from "../Errors/NotFound";
import NoPlaytime from "../Errors/NoPlaytime";
import NoAliases from "../Errors/NoAliases";
import NoData from "../Errors/NoData";
import Header from "./Header";
import { connect } from "lib/store/connect";
import "./player.scss";

const Player = {
    view({ attrs, state }) {
        if (attrs.loading) {
            return null;
        } else if (!attrs.data) {
            return <NotFound />;
        } else if (attrs.data.flags && attrs.data.flags.noPlaytime) {
            return <NoPlaytime {...attrs.data} />;
        } else if (attrs.data.flags && attrs.data.flags.noAliases) {
            return <NoAliases {...attrs.data} />;
        } else if (!attrs.data.stats || !attrs.data.rank) {
            return <NoData {...attrs.data} />;
        } else {
            return (
                <div className={`container player ${attrs.data.id}`}>
                    <Header tab={attrs.tab} platform={attrs.platform} {...attrs.data} />
                    <div className="player__tab">
                        {attrs.tab === "summary" ? <Stats key="summary" {...attrs.data} /> : null}
                        {attrs.tab === "ops" ? <Operators key="ops" {...attrs.data} /> : null}
                        {attrs.tab === "ranks" ? <Ranks key="ranks" {...attrs.data} /> : null}
                    </div>
                </div>
            );
        }
    },
};

const mapStateToProps = getState => {
    const { platform, loading, players, location: { payload } } = getState();

    return {
        data: players[payload.id],
        tab: payload.tab || "summary",
        loading,
        platform,
    };
};
export default connect(mapStateToProps)(Player);