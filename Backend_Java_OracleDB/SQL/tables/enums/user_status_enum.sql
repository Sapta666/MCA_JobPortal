create table user_status_enum (
    user_status varchar(16),
    constraint pk_#user_status_enum_$user_status primary key(user_status)
);

select * from user_status_enum;

insert into user_status_enum values('ACTIVE');
insert into user_status_enum values('INACTIVE');

alter table user_status_enum 
modify user_status varchar2(16);

commit;