var UserSql = {
    query : 'SELECT * FROM 实验表 where account = ?',
    insert: 'INSERT INTO 实验表(account,date,time,name,address,phone,type,size,number) values(?,?,?,?,?,?,?,?,?)',
    rg_query:'select * from 用户表',
    rg_insert:'insert into 用户表(account,password) value(?,?)'

};

module.exports = UserSql;