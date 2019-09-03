var UserSql = {
    query : 'SELECT * FROM 实验表 ',
    insert: 'INSERT INTO 实验表(date,time,name,address,phone,type,size,number) values(?,?,?,?,?,?,?,?)',
};

module.exports = UserSql;