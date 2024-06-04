export const ICON_ID = {
	CHECKBOX_ROUNDED: 'checkbox-rounded',
	CHECKBOX_SQUARE_ON: 'checkbox-square-on',
	CHECKBOX_SQUARE_OFF: 'checkbox-square-off',
	CIRCLE_DELETE: 'circle-delete',
	BTN_CLOSE: 'btn-close',
	CHEVRON: 'chevron',
	BTN_ROUND_BACK: 'btn-round-back',
	TRASH: 'trash',
	SEARCH: 'search',
	BTN_RADIO_ON: 'btn-radio-on',
	BTN_RADIO_OFF: 'btn-radio-off',
} as const;

export type IconIDTypes = (typeof ICON_ID)[keyof typeof ICON_ID];
