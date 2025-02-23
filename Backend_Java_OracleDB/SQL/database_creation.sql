--	database name => jobportalpdb
--	admin => jobportaladmin
--	password => jobportaladmin_jobportalpdb

create pluggable database jobportalpdb
    admin user jobportaladmin
    identified by jobportaladmin_jobportalpdb
    roles=(dba)
    FILE_NAME_CONVERT=('/pdbseed/'
                    ,'/jobportalpdb/');


alter pluggable database jobportalpdb open;
