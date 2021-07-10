/**
 * A social discipleship group.
 */
class Group {
  constructor(id, name, meetingPlace, description, isJoined = false) {
    this.id = id;
    this.name = name;
    this.meetingPlace = meetingPlace;
    this.description = description;
    this.isJoined = isJoined;
  }
}

const GroupsStore = {
  namespaced: true,

  state: {
    groups: [
      new Group(
        1,
        "Group Name",
        "Slack",
        "This is a group that is a group for grouping groupies in a group in such a way that the group is groupedly grouped together. Group."
      ),
      new Group(
        2,
        "The Orange Group",
        "Zoom",
        "A group for studying Paul's new testament letters. Open until we get at least 40 people."
      ),
      new Group(
        3,
        "Elitist Hyper-Pharisees",
        "Google Meet",
        "This is a meeting of the minds. Only the smartest most brilliant people need apply. Actually don't join, you aren't good enough."
      ),
    ],
  },
  getters: {
    groupPool: (state) => {
      let groupsAsEntries = state.groups.map((g) => [g.id, g]);
      return Object.fromEntries(groupsAsEntries);
    },
    getGroup: (_state, getters) => (id) => getters.groupPool[id],
    myGroups: (state) => state.groups.filter((g) => g.isJoined),
    openGroups: (state) => state.groups.filter((g) => !g.isJoined),
  },
  mutations: {
    joinGroup(_state, { getters, groupId }) {
      getters.getGroup(groupId).isJoined = true;
    },
    leaveGroup(_state, { getters, groupId }) {
      getters.getGroup(groupId).isJoined = false;
    },
  },
  actions: {
    joinGroup({ commit, getters }, groupId) {
      commit("joinGroup", { getters, groupId });
    },
    leaveGroup({ commit, getters }, groupId) {
      commit("leaveGroup", { getters, groupId });
    },
  },
};

export { GroupsStore };
