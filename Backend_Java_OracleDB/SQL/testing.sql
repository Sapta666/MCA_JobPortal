create table testing (
    user_type varchar2(32),
    constraint fk_user_type foreign key(user_type) references user_type_enum(user_type)
);

create or replace procedure sp_insert_testing (
    user_type in testing.user_type%TYPE,
    isCorrect out varchar2
)
is
begin
    insert into testing values(user_type);
    
    isCorrect := 'abc';
end;
/

commit;

select * from testing;

truncate table testing;