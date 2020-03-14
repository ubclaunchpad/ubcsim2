using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using System.Runtime.InteropServices;

public class GameController : MonoBehaviour
{
    [DllImport("__Internal")]
    private static extern void LoseMiniGame();
    [DllImport("__Internal")]
    private static extern void WinMiniGame();

    public GameObject player;
    public GameObject enemy;
    public Transform enemySpawnPoint;

    private float nextEnemySpawn = 2.0f;
    private float spawnTimer = 3.0f;
    public int enemiesToSpawn = 10;
    private GameObject[] spawnedEnemies;
    private bool gameIsDone;

    // Start is called before the first frame update
    void Start()
    {
        gameIsDone = false;
    }

    // Update is called once per frame
    void Update()
    {
        if (Time.time >= nextEnemySpawn && enemiesToSpawn > 0)
        {
            nextEnemySpawn += spawnTimer;
            Instantiate(enemy, enemySpawnPoint.transform.position, enemySpawnPoint.transform.rotation);
            enemiesToSpawn--;
        }

        spawnedEnemies = GameObject.FindGameObjectsWithTag ("Enemy");

        if (player != null && spawnedEnemies.Length <= 0 && enemiesToSpawn <= 0 && !gameIsDone)
        {
            gameIsDone = true;
            Debug.Log("Win here");
            WinMiniGame();
        }
        else if (player == null && !gameIsDone)
        {
            gameIsDone = true;
            Debug.Log("Lose here");
            LoseMiniGame();
        }
    }
}
