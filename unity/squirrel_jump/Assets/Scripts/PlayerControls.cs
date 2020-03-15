using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class PlayerControls : MonoBehaviour
{
    public float jumpHeight;

    public Transform groundCheck;
    public float groundCheckRadius;
    public LayerMask whatIsGround;

    private const int JUMP_APEX_Y_SPEED = 2;

    private Rigidbody2D rb;
    private Animator anim;

    // Start is called before the first frame update
    void Start()
    {
        rb = GetComponent<Rigidbody2D>();
        anim = GetComponent<Animator>();
    }

    // Update is called once per frame
    void Update()
    {
        rb.velocity = new Vector2(0, rb.velocity.y);
        bool onGround = Physics2D.OverlapCircle(groundCheck.position, groundCheckRadius, whatIsGround);

        if (Input.GetMouseButton(0) && onGround)
        {
            rb.velocity = new Vector2(0, jumpHeight);
        }

        if (onGround)
        {
            setAnimation(true, false, false, false);
        }
        else if (System.Math.Abs(rb.velocity.y) < JUMP_APEX_Y_SPEED)
        {
            setAnimation(false, false, true, false);
        }
        else if (rb.velocity.y > 0)
        {
            setAnimation(false, true, false, false);
        }
        else if (rb.velocity.y < 0)
        {
            setAnimation(false, false, false, true);
        }
    }

    void OnCollisionEnter2D(Collision2D other)
    {
        if (other.gameObject.tag == "Enemy")
        {
            Destroy(gameObject);
        }
    }

    void setAnimation(bool onGround, bool isRising, bool isHanging, bool isFalling)
    {
        anim.SetBool("onGround", onGround);
        anim.SetBool("isRising", isRising);
        anim.SetBool("isHanging", isHanging);
        anim.SetBool("isFalling", isFalling);
    }
}
