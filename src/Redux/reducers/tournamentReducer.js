import {
    SET_TOURNAMENTS,
    SET_PLAYERS,
    SET_INSCRIPTIONS,
    SET_PARTICIPANTS,
    SET_MATCHES
} from "../actionTypes";

const initialUserSessionState = {
    tournaments: {},
    inscriptions: {},
    participants: {},
    players: {},
    matches: {}
};

export default function (state = initialUserSessionState, action) {
    const { payload, type } = action;
    const newState = { ...state };
    switch (type) {
        case SET_TOURNAMENTS: {
            const { tournaments } = payload;
            newState.tournaments = tournaments;
            return newState;
        }
        case SET_PLAYERS: {
            const { players } = payload;
            newState.players = players;
            return newState;
        }
        case SET_INSCRIPTIONS: {
            const { inscriptions } = payload;
            newState.inscriptions = inscriptions;
            return newState;
        }
        case SET_PARTICIPANTS: {
            const { participants } = payload;
            newState.participants = participants;
            return newState;
        }
        case SET_MATCHES: {
            const { matches } = payload;
            newState.matches = matches;
            return newState;
        }
        default: {
            return newState;
        }
    }
}
