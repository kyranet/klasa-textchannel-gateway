const { Structures } = require('discord.js');

module.exports = Structures.extend('TextChannel', TextChannel => {
	/**
	 * Klasa's Extended GuildMember
	 * @extends external:GuildMember
	 */
	class KlasaTextChannel extends TextChannel {

		/**
		 * @typedef {external:GuildMemberJSON} KlasaMemberJSON
		 * @property {external:SettingsJSON} settings The per member settings
		 */

		/**
		 * @param {...*} args Normal D.JS GuildMember args
		 */
		constructor(...args) {
			super(...args);

			/**
			 * The member level settings for this context (member || default)
			 * @since 0.0.1
			 * @type {external:Settings}
			 */
			this.settings = this.client.gateways.textchannels.create(this.id);
		}

		/**
		 * Returns the JSON-compatible object of this instance.
		 * @since 0.5.0
		 * @returns {KlasaMemberJSON}
		 */
		toJSON() {
			return { ...super.toJSON(), settings: this.settings };
		}

	}

	return KlasaTextChannel;
});
