import { Plugin } from "white-web-sdk";
import { PluginContext, WhiteVideoPluginAttributes } from "./types";
import { WhiteVideoPlugin } from "./WhiteVideoPlugin";

/**
 * white-web-sdk video plugin.
 * @example
 * const plugins = createPlugins({ "video": videoPlugin });
 * plugins.setPluginContext("video", {
 *     identity: identity === Identity.creator ? "host" : ""
 * });
 * let sdk = new WhiteWebSdk({ plugins });
 * let room = await sdk.joinRoom(...);
 * room.insertPlugin("video", {
 *     ...,
 *     attributes: { src: url, poster: url2, isNavigationDisable: false },
 * });
 */
export const videoPlugin: Plugin<PluginContext, WhiteVideoPluginAttributes> = Object.freeze({
    kind: "video",
    render: WhiteVideoPlugin,
    defaultAttributes: {
        src: "",
        hostTime: 0,
        currentTime: 0,
        paused: true,
        muted: false,
        volume: 1,

        pluginVideoUrl: "",
        play: false,
        mute: false,
        seek: 0,
        seekTime: 0,
    },
    hitTest(plugin) {
        const memberState = (plugin as any).component.context.getMemberState();
        return !(memberState?.currentApplianceName === "eraser");
    },
});
