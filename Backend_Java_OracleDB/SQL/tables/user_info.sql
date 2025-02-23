 create table user_info(
    user_id varchar2(20) default '',
    user_name varchar2(64) default '',    
    password varchar2(64) default '',
    f_name varchar2(20) default '',
    l_name varchar2(20) default '',
    address varchar2(256) default '',    
    address_2 varchar2(256) default '',
    dob_num_date integer default 0,
    gender varchar2(10) default '',
    country_code varchar2(5) default '',
    state_code varchar2(5) default '',
    city varchar2(20) default '',
    zip integer default 0,        
    ph_no integer default 0,
    email_id varchar2(64) default '',
    user_type varchar2(16) not null,
    user_status varchar2(16) not null,
    constraint pk_#user_info_$user_id primary key(user_id),
    constraint fk_#user_info_$user_type_#user_type_enum_$user_type foreign key(user_type) references user_type_enum(user_type),
    constraint fk_#user_info_$user_status_$user_status_enum_$user_status foreign key(user_status) references user_status_enum(user_status)
);
    
desc user_info;   

select * from user_info;

insert into user_info(user_id,user_name,password,user_type,user_status) values(fn_gen_user_id(),'admin101','pass101','ADMIN','ACTIVE');

delete from user_info where user_id = 'user193';

commit;

alter table user_info
modify user_status varchar2(16);

alter table user_info drop constraint fk_#user_info_$user_status_$user_status_enum_$user_status;
alter table user_info drop constraint fk_#user_info_$user_type_#user_type_enum_$user_type;

delete from user_info where user_id = 'user194';

alter table user_info 
add CONSTRAINT fk_#user_info_$user_type_#user_type_enum_$user_type foreign key(user_type) references user_type_enum(user_type);

alter table user_info 
add CONSTRAINT k_#user_info_$user_status_$user_status_enum_$user_status foreign key(user_status) references user_status_enum(user_status);

alter table user_info
modify user_status varchar2(16);

