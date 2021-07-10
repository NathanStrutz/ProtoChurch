/**
 * A social discipleship group.
 */
class Group {
  constructor(id, name, meetingPlace, meetingDetails, description, isJoined = false) {
    this.id = id; // ID is a slug
    this.name = name;
    this.meetingPlace = meetingPlace;
    this.meetingDetails = meetingDetails;
    this.description = description;
    this.isJoined = isJoined;
  }
}

const GroupsStore = {
  namespaced: true,

  state: {
    groups: [
      new Group(
        "group_name",
        "Group Name",
        "Slack",
        "Join our Slack community where we have small group and personal discussions, any hour of the day.",
        "This is a group that is a group for grouping groupies in a group in such a way that the group is groupedly grouped together. Group."
      ),
      new Group(
        "the_orange_group",
        "The Orange Group",
        "Zoom",
        "We meet on Zoom meetings every Thursday at 6-7 PM (eastern time). I'll send out the link when we get close.",
        "A group for studying Paul's new testament letters. Open until we get at least 40 people."
      ),
      new Group(
        "elitist_hyper_pharisees",
        "Elitist Hyper-Pharisees",
        "Google Meet",
        "We use Google Meet, it's the easiest for superior people like us. Join us every Saturday, all afternoon and evening.",
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
