export const registerSettings = function () {
	// Register any custom module settings here
	let modulename = "monks-scene-navigation";

	const debouncedReload = foundry.utils.debounce(function () { window.location.reload(); }, 100);
	
	game.settings.register(modulename, "click-to-view", {
		name: game.i18n.localize("MonksSceneNavigation.click-to-view.name"),
		hint: game.i18n.localize("MonksSceneNavigation.click-to-view.hint"),
		scope: "world",
		config: true,
		default: true,
		type: Boolean
	});
	game.settings.register(modulename, "scene-indicator", {
		name: game.i18n.localize("MonksSceneNavigation.scene-indicator.name"),
		hint: game.i18n.localize("MonksSceneNavigation.scene-indicator.hint"),
		scope: "world",
		config: true,
		default: true,
		type: Boolean
	});
	game.settings.register(modulename, "modify-scene-bar", {
		name: game.i18n.localize("MonksSceneNavigation.modify-scene-bar.name"),
		hint: game.i18n.localize("MonksSceneNavigation.modify-scene-bar.hint"),
		scope: "world",
		config: true,
		default: true,
		type: Boolean,
		onChange: debouncedReload
	});
	game.settings.register(modulename, "folder-position", {
		name: game.i18n.localize("MonksSceneNavigation.folder-position.name"),
		hint: game.i18n.localize("MonksSceneNavigation.folder-position.hint"),
		scope: "world",
		config: true,
		default: "back",
		choices: {
			'front': game.i18n.localize("MonksSceneNavigation.folder-position.front"),
			'back': game.i18n.localize("MonksSceneNavigation.folder-position.back"),
		},
		type: String
	});
	game.settings.register(modulename, "player-folders", {
		name: game.i18n.localize("MonksSceneNavigation.player-folders.name"),
		hint: game.i18n.localize("MonksSceneNavigation.player-folders.hint"),
		scope: "world",
		config: true,
		default: false,
		type: Boolean
	});
	game.settings.register(modulename, "display-background", {
		name: game.i18n.localize("MonksSceneNavigation.display-background.name"),
		hint: game.i18n.localize("MonksSceneNavigation.display-background.hint"),
		scope: "client",
		config: true,
		default: true,
		type: Boolean,
		onChange: debouncedReload
	});
	game.settings.register(modulename, "quick-navigation", {
		name: game.i18n.localize("MonksSceneNavigation.quick-navigation.name"),
		hint: game.i18n.localize("MonksSceneNavigation.quick-navigation.hint"),
		scope: "world",
		config: true,
		default: false,
		type: Boolean,
		onChange: debouncedReload
	});
	game.settings.register(modulename, "doubleclick-activate", {
		name: game.i18n.localize("MonksSceneNavigation.doubleclick-activate.name"),
		hint: game.i18n.localize("MonksSceneNavigation.doubleclick-activate.hint"),
		scope: "world",
		config: true,
		default: true,
		type: Boolean,
		onChange: debouncedReload
	});
};
