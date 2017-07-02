import * as m from "mithril";
import Stat from "components/misc/Stat";
import { formatDuration, getWinChance, getKillRatio } from "lib/stats";
import "./statoverview.scss";

export default {
    view({ attrs }) {
        return (
            <div className="profile-module statoverview">
                <div className="profile-module-header">General</div>
                <div className="row">
                    <div className="col">
                        <Stat label="wins">{attrs.stats.general.won}</Stat>
                        <Stat label="losses">{attrs.stats.general.lost}</Stat>
                        <Stat label="win rate" tooltip="how many % of your games are wins">{getWinChance(attrs.stats.general)}</Stat>
                        <Stat label="dbno">{attrs.stats.general.dbno}</Stat>
                        <Stat label="dbno assists">{attrs.stats.general.dbnoAssists}</Stat>
                    </div>
                    <div className="col">
                        <Stat label="kills">{attrs.stats.general.kills}</Stat>
                        <Stat label="k/d ratio">{getKillRatio(attrs.stats.general)}</Stat>
                        <Stat label="deaths">{attrs.stats.general.deaths}</Stat>
                        <Stat label="assists">{attrs.stats.general.assists}</Stat>
                        <Stat label="suicides">{attrs.stats.general.suicides}</Stat>
                    </div>
                    <div className="col">
                        <Stat label="accuracy">{attrs.stats.general.hitChance.toFixed(2)}%</Stat>
                        <Stat label="headshots">{attrs.stats.general.headshot}</Stat>
                        <Stat label="hs ratio" tooltip="how many of your kills are headshots">
                            {attrs.stats.general.headshotRatio.toFixed(2)}%
                        </Stat>
                        <Stat label="hs chance" tooltip="the chance of a shot being a headshot">
                            {attrs.stats.general.headshotChance.toFixed(2)}%
                        </Stat>
                    </div>
                </div>

                <div className="profile-module-header">Ranked</div>
                <div className="row">
                    <div className="col">
                        <Stat label="wins">{attrs.stats.ranked.won}</Stat>
                        <Stat label="losses">{attrs.stats.ranked.lost}</Stat>
                        <Stat label="win rate">{getWinChance(attrs.stats.ranked)}</Stat>
                    </div>
                    <div className="col">
                        <Stat label="kills">{attrs.stats.ranked.kills}</Stat>
                        <Stat label="deaths">{attrs.stats.ranked.deaths}</Stat>
                        <Stat label="k/d ratio">{getKillRatio(attrs.stats.ranked)}</Stat>
                    </div>
                    <div className="col">
                        <Stat label="abandons">{attrs.stats.ranked.abandons}</Stat>
                        <Stat label="playtime">{formatDuration(attrs.lastPlayed.ranked)}</Stat>
                    </div>
                </div>

                <div className="profile-module-header">Casual</div>
                <div className="row">
                    <div className="col">
                        <Stat label="wins">{attrs.stats.casual.won}</Stat>
                        <Stat label="losses">{attrs.stats.casual.lost}</Stat>
                        <Stat label="win rate">{getWinChance(attrs.stats.casual)}</Stat>
                    </div>
                    <div className="col">
                        <Stat label="kills">{attrs.stats.casual.kills}</Stat>
                        <Stat label="deaths">{attrs.stats.casual.deaths}</Stat>
                        <Stat label="k/d ratio">{getKillRatio(attrs.stats.casual)}</Stat>
                    </div>
                    <div className="col">
                        <Stat label="playtime">{formatDuration(attrs.lastPlayed.casual)}</Stat>
                    </div>
                </div>

                <div className="profile-module-header">Misc</div>
                <div className="row">
                    <div className="col">
                        <Stat label="melees">{attrs.stats.general.meleeKills}</Stat>
                        <Stat label="revives">{attrs.stats.general.revives}</Stat>
                        <Stat label="gadgets destroyed">
                            {attrs.stats.general.gadgetsDestroyed}
                        </Stat>
                    </div>
                    <div className="col">
                        <Stat label="pen. kills" tooltip="how many kills were by wallbang">
                            {attrs.stats.general.penetrationKills}
                        </Stat>
                        <Stat label="revives denied">{attrs.stats.general.revivesDenied}</Stat>
                    </div>
                    <div className="col">
                        <Stat label="blindfires">{attrs.stats.general.blindKills}</Stat>
                        <Stat label="rappel breaches">{attrs.stats.general.rappelBreaches}</Stat>
                    </div>
                </div>

                <div className="profile-module-divider"></div>
                <div className="row">
                    <div className="col">
                        <Stat label="first added">
                            {new Date(attrs.created_at).toLocaleDateString()}
                        </Stat>
                    </div>
                    <div className="col">
                        <Stat label="last played">
                            {attrs.lastPlayed.last_played
                                ? new Date(attrs.lastPlayed.last_played).toLocaleDateString()
                                : "-"
                            }
                        </Stat>
                    </div>
                </div>
            </div>
        )
    }
}