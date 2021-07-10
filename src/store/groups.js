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
    allGroups: {
      1: new Group(
        1,
        "Group Name",
        "Slack",
        "This is a group that is a group for grouping groupies in a group in such a way that the group is groupedly grouped together. Group.",
        true
      ),
      2: new Group(
        2,
        "The Orange Group",
        "Zoom",
        "A group for studying Paul's new testament letters. Open until we get at least 40 people.",
        true
      ),
      3: new Group(
        3,
        "Elitist Hyper-Pharisees",
        "Google Meet",
        "This is a meeting of the minds. Only the smartest most brilliant people need apply. Actually don't join, you aren't good enough."
      ),
    },
    myGroups: [1, 2],
    openGroups: [3],
  },
  getters: {
    getGroup: (store) => (id) => store.allGroups[id],
  },
};

export { GroupsStore };
