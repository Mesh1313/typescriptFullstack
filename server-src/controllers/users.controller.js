"use strict";
var user_1 = require("../models/user");
var mongodb_1 = require("mongodb");
function getUser(id, callback) {
    user_1.User.findOne({ _id: mongodb_1.ObjectID(id) }, function (err, result) {
        if (err) {
            console.error(err);
            return;
        }
        callback(result);
    });
}
exports.getUser = getUser;
function getUsers(callback) {
    user_1.User.find({}, function (err, results) {
        if (err) {
            console.error(err);
            return;
        }
        callback(results);
    });
}
exports.getUsers = getUsers;
function insertUser(userObj, callback) {
    if (userObj._id) {
        var id = userObj._id;
        delete userObj._id;
        return user_1.User.update({ _id: mongodb_1.ObjectID(id) }, userObj, function (error, result) {
            if (error) {
                console.error(error);
                return;
            }
            callback(result);
        });
    }
    user_1.User.create(userObj, function (error, result) {
        if (error) {
            console.error(error);
            return;
        }
        callback(result);
    });
}
exports.insertUser = insertUser;
function deleteUser(id, callback) {
    user_1.User.findOneAndRemove({ _id: mongodb_1.ObjectID(id) }, function (err, result) {
        if (err) {
            console.error(err);
            return;
        }
        callback(result);
    });
}
exports.deleteUser = deleteUser;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRyb2xsZXJzL3VzZXJzLmNvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHFCQUEwQixnQkFBZ0IsQ0FBQyxDQUFBO0FBQzNDLHdCQUF1QixTQUFTLENBQUMsQ0FBQTtBQUVqQyxpQkFBd0IsRUFBVSxFQUFFLFFBQThCO0lBQzlELFdBQUksQ0FBQyxPQUFPLENBQUMsRUFBQyxHQUFHLEVBQUUsa0JBQVEsQ0FBQyxFQUFFLENBQUMsRUFBQyxFQUFFLFVBQUMsR0FBRyxFQUFFLE1BQU07UUFDMUMsRUFBRSxDQUFBLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztZQUNMLE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDbkIsTUFBTSxDQUFDO1FBQ1gsQ0FBQztRQUNELFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNyQixDQUFDLENBQUMsQ0FBQztBQUNQLENBQUM7QUFSZSxlQUFPLFVBUXRCLENBQUE7QUFFRCxrQkFBeUIsUUFBaUM7SUFDdEQsV0FBSSxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsVUFBQyxHQUFHLEVBQUUsT0FBTztRQUN2QixFQUFFLENBQUEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBQ0wsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNuQixNQUFNLENBQUM7UUFDWCxDQUFDO1FBQ0QsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3RCLENBQUMsQ0FBQyxDQUFDO0FBQ1AsQ0FBQztBQVJlLGdCQUFRLFdBUXZCLENBQUE7QUFFRCxvQkFBMkIsT0FBYSxFQUFFLFFBQThCO0lBQ3BFLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ2QsSUFBSSxFQUFFLEdBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQztRQUNyQixPQUFPLE9BQU8sQ0FBQyxHQUFHLENBQUM7UUFFbkIsTUFBTSxDQUFDLFdBQUksQ0FBQyxNQUFNLENBQUMsRUFBQyxHQUFHLEVBQUUsa0JBQVEsQ0FBQyxFQUFFLENBQUMsRUFBQyxFQUFFLE9BQU8sRUFBRSxVQUFDLEtBQUssRUFBRSxNQUFNO1lBQzNELEVBQUUsQ0FBQSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7Z0JBQ1AsT0FBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDckIsTUFBTSxDQUFDO1lBQ1gsQ0FBQztZQUNELFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNyQixDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRCxXQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRSxVQUFDLEtBQUssRUFBRSxNQUFNO1FBQy9CLEVBQUUsQ0FBQSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7WUFDUCxPQUFPLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ3JCLE1BQU0sQ0FBQztRQUNYLENBQUM7UUFDRCxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDckIsQ0FBQyxDQUFDLENBQUE7QUFDTixDQUFDO0FBckJlLGtCQUFVLGFBcUJ6QixDQUFBO0FBRUQsb0JBQTJCLEVBQVMsRUFBRSxRQUEwQjtJQUM1RCxXQUFJLENBQUMsZ0JBQWdCLENBQUMsRUFBQyxHQUFHLEVBQUUsa0JBQVEsQ0FBQyxFQUFFLENBQUMsRUFBQyxFQUFFLFVBQUMsR0FBRyxFQUFFLE1BQU07UUFDbkQsRUFBRSxDQUFBLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztZQUNMLE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDbkIsTUFBTSxDQUFDO1FBQ1gsQ0FBQztRQUVELFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNyQixDQUFDLENBQUMsQ0FBQztBQUNQLENBQUM7QUFUZSxrQkFBVSxhQVN6QixDQUFBIiwiZmlsZSI6ImNvbnRyb2xsZXJzL3VzZXJzLmNvbnRyb2xsZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1VzZXIsIElVc2VyfSBmcm9tIFwiLi4vbW9kZWxzL3VzZXJcIjtcbmltcG9ydCB7T2JqZWN0SUR9IGZyb20gXCJtb25nb2RiXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRVc2VyKGlkOiBzdHJpbmcsIGNhbGxiYWNrOih1c2VyOiBJVXNlcikgPT4gdm9pZCkge1xuICAgIFVzZXIuZmluZE9uZSh7X2lkOiBPYmplY3RJRChpZCl9LCAoZXJyLCByZXN1bHQpID0+IHtcbiAgICAgICAgaWYoZXJyKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY2FsbGJhY2socmVzdWx0KTtcbiAgICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFVzZXJzKGNhbGxiYWNrOih1c2VyczogSVVzZXJbXSkgPT4gdm9pZCkge1xuICAgIFVzZXIuZmluZCh7fSwgKGVyciwgcmVzdWx0cyk9PntcbiAgICAgICAgaWYoZXJyKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY2FsbGJhY2socmVzdWx0cyk7XG4gICAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpbnNlcnRVc2VyKHVzZXJPYmo6SVVzZXIsIGNhbGxiYWNrOih1c2VyOiBJVXNlcikgPT4gdm9pZCkge1xuICAgIGlmICh1c2VyT2JqLl9pZCkge1xuICAgICAgICB2YXIgaWQgPSB1c2VyT2JqLl9pZDtcbiAgICAgICAgZGVsZXRlIHVzZXJPYmouX2lkO1xuXG4gICAgICAgIHJldHVybiBVc2VyLnVwZGF0ZSh7X2lkOiBPYmplY3RJRChpZCl9LCB1c2VyT2JqLCAoZXJyb3IsIHJlc3VsdCkgPT4ge1xuICAgICAgICAgICAgaWYoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYWxsYmFjayhyZXN1bHQpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBVc2VyLmNyZWF0ZSh1c2VyT2JqLCAoZXJyb3IsIHJlc3VsdCkgPT4ge1xuICAgICAgICBpZihlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY2FsbGJhY2socmVzdWx0KTtcbiAgICB9KVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVsZXRlVXNlcihpZDpzdHJpbmcsIGNhbGxiYWNrOihyZXM6YW55KSA9PiB2b2lkKSB7XG4gICAgVXNlci5maW5kT25lQW5kUmVtb3ZlKHtfaWQ6IE9iamVjdElEKGlkKX0sIChlcnIsIHJlc3VsdCkgPT4ge1xuICAgICAgICBpZihlcnIpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNhbGxiYWNrKHJlc3VsdCk7XG4gICAgfSk7XG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9