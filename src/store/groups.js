import { generateDate_dateChange } from "@/utils/date-generation";

/**
 * A social discipleship group.
 */
class Group {
  constructor(
    id,
    name,
    meetingPlace,
    meetingDetails,
    description,
    creationDate,
    goPrivateDate = null,
    isJoined = false
  ) {
    this.id = id; // ID is a slug
    this.name = name;
    this.meetingPlace = meetingPlace;
    this.meetingDetails = meetingDetails;
    this.description = description;
    this.creationDate = creationDate;
    this.goPrivateDate = goPrivateDate;
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
        "This is a group that is a group for grouping groupies in a group in such a way that the group is groupedly grouped together. Group.",
        generateDate_dateChange(-1),
        generateDate_dateChange(2)
      ),
      new Group(
        "the_orange_group",
        "The Orange Group",
        "Zoom",
        "We meet on Zoom meetings every Thursday at 6-7 PM (eastern time). I'll send out the link when we get close.",
        "A group for studying Paul's new testament letters. Open until we get at least 40 people.",
        generateDate_dateChange(-5),
        generateDate_dateChange(25)
      ),
      new Group(
        "elitist_hyper_pharisees",
        "Elitist Hyper-Pharisees",
        "Google Meet",
        "We use Google Meet, it's the easiest for superior people like us. Join us every Saturday, all afternoon and evening.",
        "This is a meeting of the minds. Only the smartest most brilliant people need apply. Actually don't join, you aren't good enough.",
        generateDate_dateChange(-31),
        generateDate_dateChange(90)
      ),
      new Group(
        "new_to_church",
        "New To Church",
        "Zoom, Weekday evenings",
        "Zoom, Weekday evenings",
        "The perfect starting place for your new faith journey.",
        generateDate_dateChange(0)
      ),
      new Group(
        "romans_bible_study",
        "Romans Bible Study",
        "In-person, Wednesday nights",
        "We meet in-person, Wednesday nights at the church building",
        'A deep-dive into a deeply profound book. "For all have sinned and fall short of the glory of God, and are justified by his grace as a gift, through the redemption that is in Christ Jesus, whom God put forward as a propitiation by his blood, to be received by faith."',
        generateDate_dateChange(-14),
        generateDate_dateChange(3)
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
    newGroups: (_state, getters) => {
      let newestGroups = [...getters.openGroups];
      newestGroups.sort((a, b) => new Date(b.creationDate) - new Date(a.creationDate));
      newestGroups = newestGroups.slice(0, 2);
      return newestGroups;
    },
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
