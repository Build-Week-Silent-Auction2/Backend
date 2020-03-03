const db = require("../data/dbconfig");

function get(table, id) {
  if (table === "bidders" && id === null) {
    return db("bidders as b").select(
      "b.id",
      "b.firstName",
      "b.lastName",
      "b.email",
      "b.streetAddress",
      "b.city",
      "b.state",
      "b.zipCode",
      "b.username"
    );
    // eslint-disable-next-line no-else-return
  } else if (table === "bidders" && id !== null) {
    return db("bidders as b")
      .select(
        "b.id",
        "b.firstName",
        "b.lastName",
        "b.email",
        "b.streetAddress",
        "b.city",
        "b.state",
        "b.zipCode",
        "b.username"
      )
      .where(id);
  } else if (table === "sellers" && id === null) {
    return db("sellers as s").select(
      "s.id",
      "s.firstName",
      "s.lastName",
      "s.email",
      "s.streetAddress",
      "s.city",
      "s.state",
      "s.zipCode",
      "s.username"
    );
  } else if (table === "sellers" && id !== null) {
    return db("sellers as s")
      .select(
        "s.id",
        "s.firstName",
        "s.lastName",
        "s.email",
        "s.streetAddress",
        "s.city",
        "s.state",
        "s.zipCode",
        "s.username"
      )
      .where(id);
  }
}

function remove(table, nid) {
  if (table === "bidders") {
    return db('bidders')
      .where({id: nid} )
      .del();
  } else {
    return db('sellers')
      .where({ id: nid} )
      .del();
  }
}

module.exports = {
  get,
  remove
};