create table user_type_enum (
    user_type varchar2(16),
    constraint pk_#user_type_enum_$user_type primary key(user_type)
);
    
select * from user_type_enum;    

insert into user_type_enum values('ADMIN');
insert into user_type_enum values('JOBSEEKER');
insert into user_type_enum values('EMPLOYER');