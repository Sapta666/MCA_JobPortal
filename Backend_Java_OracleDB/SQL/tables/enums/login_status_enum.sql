create table login_status_enum (
    login_status varchar2(20),
    constraint pk_#login_status_enum_$login_status primary key (login_status)
);

select * from login_status_enum;

insert into login_status_enum values('LOGIN_IN');
insert into login_status_enum values('LOGIN_OUT');

